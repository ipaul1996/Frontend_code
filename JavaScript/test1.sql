CREATE OR REPLACE FUNCTION revoke_chat_access()
RETURNS TRIGGER AS $$
DECLARE
  chat_room_id INT;
BEGIN
  CASE
    WHEN NEW.user_app_access = false AND OLD.user_app_access = true THEN
      SELECT room_id INTO chat_room_id
      FROM chat_application.chat_room
      WHERE app_name = 'user_app'; 

    WHEN NEW.cp_app_access = false AND OLD.cp_app_access = true THEN
      SELECT room_id INTO chat_room_id
      FROM chat_application.chat_room
      WHERE app_name = 'cp_app';

    WHEN NEW.ticketing_app_access = false AND OLD.ticketing_app_access = true THEN
      SELECT room_id INTO chat_room_id
      FROM chat_application.chat_room
      WHERE app_name = 'ticketing_app';

    WHEN NEW.pms_app_access = false AND OLD.pms_app_access = true THEN
      SELECT room_id INTO chat_room_id
      FROM chat_application.chat_room
      WHERE app_name = 'pms_app';
  END CASE;

  -- If room_id found, update records
  IF chat_room_id IS NOT NULL THEN
    BEGIN
      -- Check if the combination of room_id and user_id exists
      IF EXISTS (
        SELECT 1
        FROM chat_application.chat_id_room_member_access
        WHERE room_id = chat_room_id AND user_id = NEW.user_id AND active_status = true
      ) THEN
        -- Start a transaction
        BEGIN
          UPDATE chat_application.chat_id_room_member_access
          SET active_status = false
          WHERE room_id = chat_room_id AND user_id = NEW.user_id AND active_status = true;

          -- If rows were updated, update active_status in other tables
          IF FOUND THEN
            DECLARE
              old_chat_id chat_application.chat_id_room_member_access.chat_id%type;
            BEGIN
              -- Get the old_chat_id from chat_id_room_member_access table
              SELECT chat_id INTO old_chat_id
              FROM chat_application.chat_id_room_member_access
              WHERE room_id = chat_room_id AND user_id = NEW.user_id AND active_status = false;
            
              -- Update active_status in customer_message_tracking table
              UPDATE chat_application.customer_message_tracking
              SET active_status = false
              WHERE chat_id = old_chat_id;

              -- Update active_status in admin_message_tracking table
              UPDATE chat_application.admin_message_tracking
              SET active_status = false
              WHERE chat_id = old_chat_id;
            EXCEPTION
              WHEN NO_DATA_FOUND THEN
                -- Handle the case where no matching row is found
                RAISE EXCEPTION 'No matching row found for chat_id';
                
              WHEN OTHERS THEN
                -- Handle other exceptions
                RAISE EXCEPTION 'Error while updating message tracking tables';  
            END;
          END IF;
        END;
      ELSE
        RAISE EXCEPTION 'No active entry for room_id and user_id combination';
      END IF;
    END;
  ELSE
    -- If room_id not found, raise an exception
    RAISE EXCEPTION 'Chat room not found for the corresponding app';
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
