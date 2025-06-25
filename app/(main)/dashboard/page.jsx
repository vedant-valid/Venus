import CreateAccountDrawer from "@/components/create-account-drawer";
import { Card,CardContent } from "@/components/ui/card";
import React from "react";
import { Plus } from "lucide-react";


function DashboardPage() {
  return (
    <div className="px-5" >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <CreateAccountDrawer>
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="flex flex-col items-center justify-center text-muted-foreground h-full pt-5">
                    <Plus className="h-10 w-10 mb-2"/>
                    <p className="text-sm font-medium">Add New Account</p>
                </CardContent>
            </Card>
        </CreateAccountDrawer>
      </div>
    </div>
  );
} 

export default DashboardPage;
