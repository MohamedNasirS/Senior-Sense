
import React from "react";
import { PiggyBank, DollarSign } from "lucide-react";

const BudgetTracker = () => {
  return (
    <div className="container py-8 animate-fade-in">
      <h1 className="text-3xl font-bold mb-6">Budget Tracker</h1>
      
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 card-spacing">
        <div className="black-card hover-lift card-padding">
          <h2 className="text-xl font-semibold mb-4">Monthly Overview</h2>
          
          <div className="space-y-4">
            <div className="glass-card p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-3">May 2025</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Income</p>
                  <p className="text-xl font-semibold text-green-500">$3,250.00</p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground">Expenses</p>
                  <p className="text-xl font-semibold text-red-500">$2,180.45</p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground">Savings</p>
                  <p className="text-xl font-semibold text-blue-500">$425.00</p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground">Remaining</p>
                  <p className="text-xl font-semibold">$644.55</p>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-border">
                <div className="w-full bg-secondary rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: "67%" }}></div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">67% of monthly budget used</p>
              </div>
            </div>
            
            <div className="glass-card p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Top Expense Categories</h3>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Housing</span>
                    <span className="font-medium">$1,200.00</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "55%" }}></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">55% of expenses</p>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Healthcare</span>
                    <span className="font-medium">$345.25</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: "16%" }}></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">16% of expenses</p>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Groceries</span>
                    <span className="font-medium">$325.20</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: "15%" }}></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">15% of expenses</p>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Utilities</span>
                    <span className="font-medium">$210.00</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{ width: "10%" }}></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">10% of expenses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="black-card hover-lift card-padding">
          <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
          
          <div className="space-y-3">
            <div className="glass-card p-3 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-blue-500/20 p-2 rounded">
                  <DollarSign className="text-blue-500" size={16} />
                </div>
                <div>
                  <h3 className="font-medium">Pharmacy</h3>
                  <p className="text-xs text-muted-foreground">May 2, 2025</p>
                </div>
              </div>
              <span className="text-red-500 font-medium">-$45.75</span>
            </div>
            
            <div className="glass-card p-3 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-purple-500/20 p-2 rounded">
                  <DollarSign className="text-purple-500" size={16} />
                </div>
                <div>
                  <h3 className="font-medium">Doctor Visit</h3>
                  <p className="text-xs text-muted-foreground">May 1, 2025</p>
                </div>
              </div>
              <span className="text-red-500 font-medium">-$120.00</span>
            </div>
            
            <div className="glass-card p-3 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-green-500/20 p-2 rounded">
                  <PiggyBank className="text-green-500" size={16} />
                </div>
                <div>
                  <h3 className="font-medium">Social Security</h3>
                  <p className="text-xs text-muted-foreground">May 1, 2025</p>
                </div>
              </div>
              <span className="text-green-500 font-medium">+$1,450.00</span>
            </div>
            
            <div className="glass-card p-3 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-500/20 p-2 rounded">
                  <DollarSign className="text-yellow-500" size={16} />
                </div>
                <div>
                  <h3 className="font-medium">Grocery Store</h3>
                  <p className="text-xs text-muted-foreground">April 28, 2025</p>
                </div>
              </div>
              <span className="text-red-500 font-medium">-$85.32</span>
            </div>
            
            <div className="glass-card p-3 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-red-500/20 p-2 rounded">
                  <DollarSign className="text-red-500" size={16} />
                </div>
                <div>
                  <h3 className="font-medium">Utility Bill</h3>
                  <p className="text-xs text-muted-foreground">April 26, 2025</p>
                </div>
              </div>
              <span className="text-red-500 font-medium">-$135.68</span>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <button className="text-primary text-sm hover:underline">View All Transactions</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetTracker;
