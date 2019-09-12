# Feature List
nx g @nrwl/angular:lib --directory=store feature-list \
    --routing --parentModule=apps/store/src/app/app.module.ts --lazy
nx g @nrwl/angular:component game-list --project=store-feature-list

# Feature Details
nx g @nrwl/angular:lib --directory=store feature-details \
    --routing --parentModule=apps/store/src/app/app.module.ts --lazy
nx g @nrwl/angular:component game-details --project=store-feature-details

# Feature Cart
nx g @nrwl/angular:lib --directory=store feature-cart
nx g @nrwl/angular:component cart --project=store-feature-cart --export

# UI Formatters
nx g @nrwl/angular:lib --directory=store ui-formatters
nx g @nrwl/angular:pipe currency --project=store-ui-formatters --export
nx g @nrwl/angular:pipe rating --project=store-ui-formatters --export

# Data Access Games
nx g @nrwl/angular:lib --directory=store data-access-games
nx g @nrwl/angular:service games --project=store-data-access-games

# Data Access Cart
nx g @nrwl/angular:lib --directory=store data-access-cart
nx g @nrwl/angular:service cart --project=store-data-access-cart
