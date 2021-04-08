# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

To create a new rails app I would run 

rails new app_name -d  postgresql -T

ceating the new app with my name in snake case then deleting the native database and replacing it with postgresql the -T would remove the native testing suite

2. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

I would want to create a new column to hold the foreign id using a migration 

I would use command 
rails g migration add_childtablename_id_to_parenttablename 

then I would go to the text editor and in the migeration tab with the most recent time stamp and edit the change

def change
change-table :Parenttableaname Do |t|
        T.integer:childtablename
        end
    end
end

Then I would head back to the terminal and run comand

rails db:migrate 



3. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

To generate a Rails table with colums named :shirt, :pants, :shoes I would run command generate or g followd by the name of the the table, which would have to be different from the name of the database

rails g model Wardrobe shirt: integer, pants: integer, shoes: integer

4. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

The naming for the Rails model would but pascal with the first letter capitalized and singular, while the naming convention for the table that is genrated would be plural and snake_case


5. A Rails application is going to have two models. One is called Library and one is called Book. A library will have many books and a book will belong to a library. Which model would contain the foreign key? What would the foreign key column be named?

The books model would hold the foriegn key and would be named library_id

6. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?
From what I understand the schema file in Rails is where you can veiw the most uptodate information in the columns in the model. You can not see the data but can see it the names of the colums and the info they are meant to hold. You should not modify the schema. I dont know exactly why but I would asssume that rails would have inheratance issues and would cause problmens with the app. 
